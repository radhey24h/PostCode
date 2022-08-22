using Newtonsoft.Json;
using System.Collections.Generic;

namespace PostCodesAPI.Modal
{
    public class PostCodeDetails
    {
        [JsonProperty("status")]
        public int Status;
        [JsonProperty("error")]
        public string Error;
        [JsonProperty("result")]
        public PostCodeInfo Result;
    }

    public class PostCodeInfo
    {
        [JsonProperty("postcode")]
        public string Postcode { get; set; }
        [JsonProperty("country")]
        public string Country { get; set; }
        [JsonProperty("region")]
        public string Region { get; set; }
        [JsonProperty("admin_district")]
        public string AdminDistrict { get; set; }
        [JsonProperty("parliamentary_constituency")]
        public string ParliamentaryConstituency { get; set; }
        [JsonProperty("longitude")]
        public double Longitude;
        [JsonProperty("latitude")]
        public double Latitude;
        public string Area
        {
            get
            {
                if (Latitude < 52.229466)
                {
                    return "South";
                }
                if (52.229466 <= Latitude && Latitude < 53.27169)
                {
                    return "Midlands";
                }
                else if (Latitude >= 53.27169)
                {
                    //DEFAULT value here. 
                    return "North";
                }
                else return null;
            }
        }
    }
}