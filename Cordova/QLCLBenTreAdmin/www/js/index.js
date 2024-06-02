/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

    cordova.plugins.firebase.messaging.requestPermission({forceShow: false}).then(function() {
        console.log("Push messaging is allowed");
    });
    cordova.plugins.firebase.messaging.getToken().then(function(token) {
        console.log("Got device token: ", token);
        localStorage.setItem("TokenFCM", token);
        saveFCMToken(token);
    });
    cordova.plugins.firebase.messaging.onBackgroundMessage(function(payload) {
        console.log("New background FCM message: ", payload);
    });
    cordova.plugins.firebase.messaging.onMessage(function(payload) {
        console.log("New foreground FCM message: ", payload);
        console.log("New foreground FCM message: ", JSON.stringify(payload));
        console.log("New foreground FCM message:  payload.gmc.body : ", payload.gcm.body);
        let content = payload.gcm.body;
        alert(content);
    });
}

function saveFCMToken(token){
    var data = {
       ID:0,
       TokenNotification:token,
    };
    //var url = "https://api.cms.bentre.vnbook.vn/api/v1/ThanhVienThietBi/SaveAsync";
    var url = "https://apitest.cms.bentre.vnbook.vn/api/v1/ThanhVienThietBi/SaveAsync";
    post(url,data,function(response){
        console.log("saveFCMToken response:", JSON.stringify(response));
    });
}

function post(url, data, callBack) {
    try {
        console.log("post: " + url);
        console.log("post: " + JSON.stringify(data));
        var self = this;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            console.log("responseText: " + xhr.responseText);
            if (xhr.responseText)
                console.log(">>> readyState: " + xhr.readyState);
                if (xhr.status == 200 && xhr.readyState == 4) {
                    console.log(">>> response data: ");
                    console.log(xhr.responseText);
                    if (callBack){
                        console.log("callBack: " + xhr.responseText);
                        callBack(xhr.responseText);
                    }
                }
        };
        xhr.withCredentials = false;
        xhr.open('POST', url, true);
        var formUpload = new FormData();
        formUpload.append('data', JSON.stringify(data));
        xhr.send(formUpload);
    } catch (error) {
        console.log("error: " + error);
    }
}