package com.task.api;

import com.task.domain.ConfigurationDTO;
import org.mongodb.morphia.Datastore;

import java.util.List;


public interface IConfigurationBS {

    List<ConfigurationDTO> getAllConfigurationsList(Datastore datastore) throws Exception;
    ConfigurationDTO getConfigurationByConfigId(String configId, Datastore datastore) throws Exception;
    
    String getStringConfigurationValueByConfigId(String configId, Datastore datastore) throws Exception;
    Integer getIntegerConfigurationValueByConfigId(String configId, Datastore datastore) throws Exception;
    Double getDoubleConfigurationValueByConfigId(String configId, Datastore datastore) throws Exception;
    Long getLongConfigurationValueByConfigId(String configId, Datastore datastore) throws Exception;
    
    ConfigurationDTO getConfigurationByMongoId(String mongoId, Datastore datastore) throws Exception;
    void insertConfiguration(ConfigurationDTO configuration, Datastore datastore) throws Exception;
    void deleteConfiguration(ConfigurationDTO configuration, Datastore datastore) throws Exception;
    void updateConfiguration(ConfigurationDTO configuration, Datastore datastore) throws Exception;
}