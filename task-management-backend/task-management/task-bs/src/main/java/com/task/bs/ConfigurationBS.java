package com.task.bs;

import com.task.api.IConfigurationBS;
import com.task.domain.ConfigurationDTO;
import com.task.interfaces.IConfigurationDAO;
import org.mongodb.morphia.Datastore;



import javax.inject.Inject;
import java.util.List;
import javax.inject.Singleton;


@Singleton
public class ConfigurationBS implements IConfigurationBS {

    private IConfigurationDAO configurationDAO;

    @Inject
    public void setConfigurationDAO(IConfigurationDAO configurationDAO) {
        this.configurationDAO = configurationDAO;
    }

    /**
     * This method returns a list with the configurations stored in the corresponding mongo collection
     * @param datastore a Datastore of the corresponding database connection
     * @return List<ConfigurationDTO> A list of ConfigurationDTO objects
     * @throws Exception
     */
    @Override
    public List<ConfigurationDTO> getAllConfigurationsList(Datastore datastore) throws Exception {
        try {
            return this.configurationDAO.getAllConfigurationsList(datastore);
        } catch (Exception ex) {
            throw ex;
        } finally {
        }
    }

    /**
     * This method Finds the first entity matching the id of the configuration variable
     * @param configId a String with the ID of the configuration variable
     * @param datastore a Datastore of the corresponding database connection
     * @return a ConfigurationDTO object
     * @throws Exception
     */

    @Override
    public ConfigurationDTO getConfigurationByConfigId(String configId, Datastore datastore) throws Exception {
        try {
            this.validatorGetConfiguration(configId, datastore);
            return this.configurationDAO.getConfigurationByConfigId(configId, datastore);
        } catch (Exception ex) {
            throw ex;
        } finally {
        }
    }
    
    /**
     * Validate the input configuration on request.
     * @param configId Configuration parameter ID
     * @param datastore Connection reference
     * @throws Exception Exception when configId or datastore is empty
     */
    private void validatorGetConfiguration(String configId, Datastore datastore) throws Exception {
        if (configId == null
                && configId.trim().equals("")) {
            throw new Exception("Configuration parameter is null");
        }

        if (datastore == null) {
            throw new Exception("Connection reference is null");
        }
    }
    
    /** Get String configuration value.
     * @param configId Configuration id
     * @param datastore Connection reference
     * @throws Exception Exception when occurs an error
     * @return Configuration value in string format
     */
    @Override
    public String getStringConfigurationValueByConfigId(String configId, Datastore datastore) throws Exception {
        ConfigurationDTO currentConfiguration = null;
        String configurationValue = null;
        
        try {
            this.validatorGetConfiguration(configId, datastore);
            currentConfiguration = this.getConfigurationByConfigId(configId, datastore);
            
            if (currentConfiguration != null) {
                configurationValue = currentConfiguration.getValue();
            }
            
            return configurationValue;
        } catch(Exception ex) {
            throw ex;
        }
    }
    
    /** Get Integer configuration value.
     * @param configId Configuration id
     * @param datastore Connection reference
     * @throws Exception Exception when occurs an error
     * @return Configuration value in Integer format
     */
    @Override
    public Integer getIntegerConfigurationValueByConfigId(String configId, Datastore datastore) throws Exception {
        ConfigurationDTO currentConfiguration = null;
        Integer configurationValue = null;
        
        try {
            this.validatorGetConfiguration(configId, datastore);
            currentConfiguration = this.getConfigurationByConfigId(configId, datastore);
            
            if (currentConfiguration != null) {
                configurationValue = Integer.parseInt(currentConfiguration.getValue());
            }
            
            return configurationValue;
        } catch(Exception ex) {
            throw ex;
        }
    }
    
    /** Get Long configuration value.
     * @param configId Configuration ID
     * @param datastore Connection reference
     * @throws Exception Exception when occurs an error
     * @return Configuration value in Long format
     */
    @Override
    public Long getLongConfigurationValueByConfigId(String configId, Datastore datastore) throws Exception {
        ConfigurationDTO currentConfiguration = null;
        Long configurationValue = null;
        
        try  {
            this.validatorGetConfiguration(configId, datastore);
            currentConfiguration = this.getConfigurationByConfigId(configId, datastore);
            
            if (currentConfiguration != null) {
                configurationValue = Long.parseLong(currentConfiguration.getValue());
            }
            
            return configurationValue;
        } catch(Exception ex) {
            throw ex;
        }
    }
    
    
    /** Get Double configuration value.
     * @param configId Configuration id
     * @param datastore Connection reference
     * @throws Exception Exception when occurs an error
     * @return Configuration value in Double format
     */
    @Override
    public Double getDoubleConfigurationValueByConfigId(String configId, Datastore datastore) throws Exception {
        ConfigurationDTO currentConfiguration = null;
        Double configurationValue = null;
        
        try {
            this.validatorGetConfiguration(configId, datastore);
            currentConfiguration = this.getConfigurationByConfigId(configId, datastore);
            
            if (currentConfiguration != null) {
                configurationValue = Double.parseDouble(currentConfiguration.getValue());
            }
            
            return configurationValue;
        } catch(Exception ex) {
            throw ex;
        }
    }

    /**
     * Loads the entity by id value
     * @param mongoId a String with the mongo ID value
     * @param datastore a Datastore of the corresponding database connection
     * @return a ConfigurationDTO object
     * @throws Exception
     */
    @Override
    public ConfigurationDTO getConfigurationByMongoId(String mongoId, Datastore datastore) throws Exception {
        try {
            return this.configurationDAO.getConfigurationByMongoId(mongoId, datastore);
        } catch (Exception ex) {
            throw ex;
        } finally {
        }
    }

    /**
     * This method save the configuration; either inserting or overriding the existing document
     * @param configuration a ConfigurationDTO object
     * @param dataStore a Datastore of the corresponding database connection
     * @throws Exception
     */

    @Override
    public void insertConfiguration(ConfigurationDTO configuration, Datastore dataStore) throws Exception {
        try {
            this.configurationDAO.insertConfiguration(configuration, dataStore);
        } catch (Exception ex) {
            throw ex;
        }
    }

    /**
     * This method delete a configuration
     * @param configuration a ConfigurationDTO object to be deleted
     * @param datastore a Datastore of the corresponding database connection
     * @throws Exception
     */

    @Override
    public void deleteConfiguration(ConfigurationDTO configuration, Datastore datastore) throws Exception {
        try {
            this.configurationDAO.deleteConfiguration(configuration, datastore);
        } catch (Exception ex) {
            throw ex;
        } finally {
        }
    }

    /*** This method update configuration.
     * @param configuration A ConfigurationDTO object to be updated
     * @param datastore a Datastore of the corresponding database connection
     * @throws Exception Exception is bla bla
     * */
    @Override
    public void updateConfiguration(ConfigurationDTO configuration, Datastore datastore) throws Exception {
        try {
            this.configurationDAO.updateConfiguration(configuration, datastore);
        } catch (Exception ex) {
            throw ex;
        } finally {
        }
    }
}