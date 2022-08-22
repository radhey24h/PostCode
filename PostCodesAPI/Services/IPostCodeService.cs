using System;

namespace PostCodesAPI.Services
{
    public interface IPostCodeService
    {
        /// <summary>
        /// 
        /// </summary>
        /// <param name="postcode"></param>
        /// <returns></returns>
        string GetPostCodeDetailInfo(string postcode);

        /// <summary>
        /// 
        /// </summary>
        /// <param name="postcode"></param>
        /// <returns></returns>
        string GetPostCodes(string postcode);
    }
}
