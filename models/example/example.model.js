module.exports = function(sequelize, DataTypes) {
	var Example = sequelize.define('Example', {
		id: {
			type: DataTypes.INTEGER,
			primaryKey: true,
			autoIncrement: true,
			allowNull: false
		},
		text: {
			type: DataTypes.STRING
		}
	});
	return Example;
};