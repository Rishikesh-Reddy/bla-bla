"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Booking, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
      User.hasMany(models.Ride, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
      User.hasMany(models.Review, {
        foreignKey: {
          name: "userId",
          allowNull: false,
        },
      });
      User.hasMany(models.Review, {
        foreignKey: {
          name: "reviewerId",
          allowNull: false,
        },
      });
    }
  }
  User.init(
    {
      fname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "First name is required",
          },
          len: {
            args: [2, 255],
            msg: "First name must be at least 2 characters",
          },
        },
      },
      lname: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Last name is required",
          },
          len: {
            args: [2, 255],
            msg: "Last name must be at least 2 characters",
          },
        },
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Date of birth is required",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Email already exists",
        },
        validate: {
          notNull: {
            msg: "Email is required",
          },
          isEmail: {
            msg: "Email is not valid",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "Password is required",
          },
        },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "Phone number already exists",
        },
        validate: {
          notNull: {
            msg: "Phone number is required",
          },
          is: {
            args: /^(\+91|0)? ?[0-9]{10}$/,
            msg: "Phone number is not valid",
          },
        },
      },
      bio: {
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
