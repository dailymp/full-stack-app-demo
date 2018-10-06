
package com.task.domain;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.ser.std.ToStringSerializer;
import org.bson.types.ObjectId;
import org.mongodb.morphia.annotations.Entity;
import org.mongodb.morphia.annotations.Id;
import org.mongodb.morphia.annotations.Property;

@Entity(value = "tasks", noClassnameStored = true)
public class TaskDTO {
    @Id
    @JsonSerialize(using = ToStringSerializer.class)
    @Property(value="_id")
    private ObjectId id;
    
    @JsonProperty("name")
    @Property(value="name")
    private String name;
    
    @JsonProperty("finished")
    @Property(value="finished")
    private Boolean finished;
    
    public ObjectId getId() {
        return id;
    }

    public void setId(ObjectId id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
   }

    public Boolean getFinished() {
        return finished;
    }

    public void setFinished(Boolean finished) {
        this.finished = finished;
    }
}