module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
      customer_name: {
          type: DataTypes.STRING,
          validate:{
          len: [1,140],
        },
            allowNull: false
    }
    },
    {
      timestamps: false
    });
  
    // Customer.associate = function(models) {
    //   Customer.hasMany(models.Autoveloce, {
        
    //   });
    // };
    return Customer;
  };