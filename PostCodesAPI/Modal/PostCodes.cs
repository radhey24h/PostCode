using Newtonsoft.Json;
using System.Collections.Generic;

namespace PostCodesAPI.Modal
{
    public class PostCodes
    {
        //The HTTP status response from Postcodes.IO.
        [JsonProperty("status")]
        public int Status;

        //If an error is returned, it is held here.
        [JsonProperty("error")]
        public string Error;

        //The actual result of the API call.
        [JsonProperty("result")]
        public List<string> Result;
    }
}