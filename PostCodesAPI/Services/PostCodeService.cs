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
        async Task<string> IPostCodeService.GetPostCodes(string postcode)
        {
            string baseUrl = _configuration["PostCode:BaseUrl"];
            var client = new HttpClient();
            return await client.GetStringAsync(baseUrl + postcode + "/autocomplete");
        }
        /// <summary>
        /// 
        /// </summary>
        /// <param name="postcode"></param>
        /// <returns></returns>
        async Task<string> IPostCodeService.GetPostCodeDetailInfo(string postcode)
        {
            string baseUrl = _configuration["PostCode:BaseUrl"];
            var client = new HttpClient();
            return await client.GetStringAsync(baseUrl + postcode);
        }
    }
}
