using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PostCodesAPI.Services
{
    public class PostCodeService : IPostCodeService
    {
        public IConfiguration _configuration { get; }
        public PostCodeService(IConfiguration configuration)
        {
            this._configuration = configuration;
        }

        /// <summary>
        /// 
        /// </summary>
        /// <param name="postcode"></param>
        /// <returns></returns>
        public string GetPostCodes(string postcode)
        {
            string results = string.Empty;
            string baseUrl = _configuration["PostCode:BaseUrl"];
            using (var wc = new System.Net.WebClient())
            {
                try
                {
                    results = wc.DownloadString(baseUrl + postcode + "/autocomplete");
                }
                catch (Exception) { }
            }
            return results;
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="postcode"></param>
        /// <returns></returns>
        public string GetPostCodeDetailInfo(string postcode)
        {
            string results = string.Empty;
            string baseUrl = _configuration["PostCode:BaseUrl"];
            using (var wc = new System.Net.WebClient())
            {
                try
                {
                    results = wc.DownloadString(baseUrl + postcode);
                }
                catch (Exception) { }
            }
            return results;
        }

    }
}
