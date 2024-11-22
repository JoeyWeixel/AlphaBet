using System;
using System.Collections.Immutable;
using Functions.Interfaces;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace Functions;

public class GetNflOdds
{
    private readonly ILogger<GetNflOdds> _logger;

    public GetNflOdds(ILogger<GetNflOdds> logger)
    {
        _logger = logger;
    }

    [Function("GetNFLOdds_")]
    public async void Run([TimerTrigger("0 0 12 * * *")] TimerInfo myTimer)
    {
        _logger.LogInformation($"GetNFLOdds timer trigger function executed at: {DateTime.Now}");

        if (myTimer.ScheduleStatus is not null)
        {
            _logger.LogInformation($"Next timer schedule at: {myTimer.ScheduleStatus.Next}");
            
        }
        
        // Call the API to get the odds
        var oddsApi = new HttpClient();
        oddsApi.BaseAddress = new Uri(
            "https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds/?apiKey=" + 
            Environment.GetEnvironmentVariable("OddsApiKey"));

        var response = await
            oddsApi.GetAsync("&markets=h2h&regions=us");

        response.EnsureSuccessStatusCode();

        var odds = await response.Content.ReadFromJsonAsync<NflOdds[]>();


    }
}