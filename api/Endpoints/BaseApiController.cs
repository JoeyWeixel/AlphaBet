using Microsoft.AspNetCore.Mvc;
using api.ErrorResults;
using api.Exceptions;
using ArgumentException = api.Exceptions.ArgumentException;
using ArgumentNullException = api.Exceptions.ArgumentNullException;
using BadRequestResult = api.ErrorResults.BadRequestResult;
using Exception = api.Exceptions.Exception;
using InvalidOperationException = api.Exceptions.InvalidOperationException;
using NotFoundResult = api.ErrorResults.NotFoundResult;
using UnauthorizedResult = api.ErrorResults.UnauthorizedResult;

namespace api.Endpoints;

[ApiController]
public class BaseApiController : ControllerBase
{
    [NonAction]
    public JsonResult BadRequest(Exception ex)
    {
        HttpContext.Response.StatusCode = 400;
        return new JsonResult(new BadRequestResult
        {
            TraceId = HttpContext.TraceIdentifier,
            EventId = (int?)ex.Data["eventId"],
            Message = ex.Message
        });
    }

    [NonAction]
    public JsonResult Unauthorized(Exception ex)
    {
        HttpContext.Response.StatusCode = 401;
        return new JsonResult(new UnauthorizedResult
        {
            TraceId = HttpContext.TraceIdentifier,
            EventId = (int?)ex.Data["eventId"],
            Message = ex.Message
        });
    }

    [NonAction]
    public JsonResult Forbidden(Exception ex)
    {
        HttpContext.Response.StatusCode = 403;
        return new JsonResult(new ForbiddenResult
        {
            TraceId = HttpContext.TraceIdentifier,
            EventId = (int?)ex.Data["eventId"],
            Message = ex.Message
        });
    }

    [NonAction]
    public JsonResult NotFound(Exception ex)
    {
        HttpContext.Response.StatusCode = 404;
        return new JsonResult(new NotFoundResult
        {
            TraceId = HttpContext.TraceIdentifier,
            EventId = (int?)ex.Data["eventId"],
            Message = ex.Message
        });
    }

    [NonAction]
    public JsonResult TooManyRequests(Exception ex)
    {
        HttpContext.Response.StatusCode = 429;
        return new JsonResult(new TooManyRequestsResult
        {
            TraceId = HttpContext.TraceIdentifier,
            EventId = (int?)ex.Data["eventId"],
            Message = ex.Message
        });
    }

    [NonAction]
    public JsonResult InternalServerError(Exception ex)
    {
        HttpContext.Response.StatusCode = 500;
        return new JsonResult(new InternalServerErrorResult
        {
            TraceId = HttpContext.TraceIdentifier,
            EventId = (int?)ex.Data["eventId"],
            Message = ex.Message
        });
    }

    [NonAction]
    public IActionResult HandleException(Exception ex)
    {
        return ex switch
        {
            ArgumentException => BadRequest(ex),
            ArgumentNullException => BadRequest(ex),
            InvalidOperationException => BadRequest(ex),
            NotFoundException => NotFound(ex),
            UnauthorizedException => Unauthorized(ex),
            _ => InternalServerError(ex)
        };
    }
}