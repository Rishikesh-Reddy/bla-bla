'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User);
      Review.belongsTo(models.User, {
        foreignKey: {
          name: "reviewerId",
          allowNull: false,
        },
      });
    }
  }
  Review.init({
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notNull: {
          msg: "Rating is required",
        },
        min: {
          args: 1,
          msg: "Rating must be at least 1",
        },
        max: {
          args: 5,
          msg: "Rating must be at most 5",
        },
      },
    }
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};