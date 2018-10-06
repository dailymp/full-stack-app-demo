package com.task.api;

public interface IInfraestructureBS {
    Long getLongValueFromEnvironmentVariable(String environmentVariable) throws Exception;
    String getStringValueFromEnvironmentVariable(String environmentVariable) throws Exception;
}