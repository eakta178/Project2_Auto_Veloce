
module.exports = function(sequelize, DataTypes) {
  var Autoveloce = sequelize.define('Autoveloce', {
    car_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    category: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    price: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    miles: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    car_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    exterior_color: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seller_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ref_price: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    ref_miles: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dealer_name: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dealer_street: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dealer_city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dealer_state: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dealer_country: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dealer_zip: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    dealer_phone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dealer_website: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    year: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    make: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    model: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    trim: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    vehicle_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    transmission: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    drivetrain: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fuel_type: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    engine: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    engine_size: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    engine_block: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    doors: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    cylinders: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    antibrake_sys: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tank_size: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    seats: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    free_miles: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city_miles: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    photo_links: {
      type: DataTypes.TEXT,
      allowNull: true
    },

  }, 
  {
    timestamps: false,
    freezeTableName: true,
    tableName: 'autoveloce'
  })
  // Autoveloce.associate = function(models) {
  //   Autoveloce.belongsToMany(models.Customer, {
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
    return Autoveloce;
};
