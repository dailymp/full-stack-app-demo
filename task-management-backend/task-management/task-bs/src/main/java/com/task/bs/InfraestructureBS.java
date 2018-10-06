package com.task.bs;

import com.task.api.IInfraestructureBS;
import java.util.Map;
import javax.inject.Singleton;


@Singleton
public class InfraestructureBS implements IInfraestructureBS {

    /** Get value from environment system as Long.
     * @param environmentVariable Environment variable identifier
     * @return Environment value as Long
     * @throws Exception Exception if an error occurs
     */
    @Override
    public Long getLongValueFromEnvironmentVariable(String environmentVariable) throws Exception {
        String currentEnvironmentValue = null;
        Long environmentValue = null;
        
        try {
            currentEnvironmentValue = this.getValueFromEnvironmentVariable(environmentVariable);
            
            if (currentEnvironmentValue != null) {
                environmentValue = Long.parseLong(currentEnvironmentValue);
            }
            
            return environmentValue;
            
        } catch(Exception ex) {
            throw ex;
        }
    }
    
    /** Get value from environment system as String.
     * @param environmentVariable Environment variable identifier
     * @return Environment value as String
     * @throws Exception Exception if an error occurs
     */
    @Override
    public String getStringValueFromEnvironmentVariable(String environmentVariable) throws Exception {
        String currentEnvironmentValue = null;
        
        try {
            currentEnvironmentValue = this.getValueFromEnvironmentVariable(environmentVariable);
            
            return currentEnvironmentValue;
            
        } catch(Exception ex) {
            throw ex;
        }
    }
    
    /**
     * The method is used to obtain the value of a single environment variable.
     *
     * @param environmentVariable a String with the name of the enviroment variable
     * @return enviromentVariableValue a String with the value of the enviroment variable
     * @throws Exception
     */
    private String getValueFromEnvironmentVariable(String environmentVariable) throws Exception {
        String environmentVariableValue = null;

        try {
            Map<String, String> env = System.getenv();
            for (String envName : env.keySet()) {
                if (envName.equals(environmentVariable)) {
                    if (env.get(envName) != null
                            && !env.get(envName).trim().equals("")) {
                        environmentVariableValue = env.get(envName);
                        break;
                    }
                }
            }

            return environmentVariableValue;
        } catch (Exception ex) {
            throw ex;
        }
    }
}