using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PostCodesAPI.Modal;
using PostCodesAPI.Services;

namespace WebApplication2.Controllers
{
    [Route("api/[action]")]
    [ApiController]
    public class PostCodeController : ControllerBase
    {

        private readonly ILogger<PostCodeController> _logger;
        private readonly IPostCodeService _postCodeService;
        public PostCodeController(IPostCodeService postCodeService, ILogger<PostCodeController> logger)
        {
            this._logger = logger;
            this._postCodeService = postCodeService;
        }

        [HttpGet]
        public IActionResult GetAutoCompletePostCodes(string postcode)
        {
            string result = _postCodeService.GetPostCodes(postcode);
            if (string.IsNullOrEmpty(result))
                return BadRequest("Request is incorrect");

            PostCodes? postcodes = JsonConvert.DeserializeObject<PostCodes>(result);
            if (postcodes?.Status != 200)
                return BadRequest(postcodes?.Error);

            return Ok(postcodes?.Result);
        }

        [HttpGet]
        public IActionResult GetPostCodeDetails(string postcode)
        {
            string result = _postCodeService.GetPostCodeDetailInfo(postcode);
            if (string.IsNullOrEmpty(result))
                return BadRequest("Request is incorrect");

            PostCodeDetails? postCodeDetails = JsonConvert.DeserializeObject<PostCodeDetails>(result);
            if (postCodeDetails?.Status != 200)
                return BadRequest(postCodeDetails?.Error);

            return Ok(postCodeDetails?.Result);
        }
    }
}
