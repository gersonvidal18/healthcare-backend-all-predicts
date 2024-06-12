const Especialidad = require("./especialidad");
const Enfermedad = require("./enfermedad");
const sintomasPac = require("./sintomasPac");
const Sintoma = require("./sintoma");
const Diagnostico = require("./diagnostico");
const User = require("./user");

Especialidad.belongsToMany(Enfermedad, { through: "EspecialidadEnfermedad" });
Enfermedad.belongsToMany(Especialidad, { through: "EspecialidadEnfermedad" });

Sintoma.hasMany(sintomasPac, { foreignKey: "idSintoma" });
sintomasPac.belongsTo(Sintoma, { foreignKey: "idSintoma" });

User.hasMany(sintomasPac, { foreignKey: "idUsuario" });
sintomasPac.belongsTo(User, { foreignKey: "idUsuario" });

Diagnostico.hasMany(sintomasPac, { foreignKey: "idDiagnostico" });
sintomasPac.belongsTo(Diagnostico, { foreignKey: "idDiagnostico" });

User.hasMany(Diagnostico, { foreignKey: "idUsuario" });
Diagnostico.belongsTo(User, { foreignKey: "idUsuario" });


