sc.exe create ".NET_BenTrePushNotification" binpath="D:\Website\vnbook.vn\WorkerPushNotification\WorkerPushNotification.exe" start=auto

sc.exe failure ".NET_BenTrePushNotification" reset=0 actions=restart/60000/restart/60000/run/1000

sc.exe start ".NET_BenTrePushNotification"

OK











//delete
//sc.exe delete ".NET_BenTrePushNotification"