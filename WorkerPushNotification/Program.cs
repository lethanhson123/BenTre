
IHost host = Host.CreateDefaultBuilder(args)
    .UseWindowsService(options =>
    {
        options.ServiceName = "WorkerPushNotification";
    })
    .ConfigureServices(services =>
    {
        services.AddService();
        services.AddContext();
        services.AddRepository();
        services.AddHostedService<Worker>();
    })
    .ConfigureLogging((context, logging) =>
    {
        // See: https://github.com/dotnet/runtime/issues/47303
        logging.AddConfiguration(
            context.Configuration.GetSection("Logging"));
    })
    .UseDefaultServiceProvider(options => options.ValidateScopes = false)
    .Build();

await host.RunAsync();
