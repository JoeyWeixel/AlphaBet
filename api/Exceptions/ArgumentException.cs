﻿namespace api.Exceptions
{
    public class ArgumentException : Exception
    {
        public ArgumentException(int eventId, string message) : base(eventId, message) { }
    }
}