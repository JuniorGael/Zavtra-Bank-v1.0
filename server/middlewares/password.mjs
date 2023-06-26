import PasswordValidator from "password-validator";

// creer un schema pour la validation du password
const passwordSchema = new PasswordValidator()

// ajouter des proprietes que le user doit respecter pour le password
passwordSchema
  .is()
  .min(7)
  // Minimum length 7
  .is()
  .max(100)
  // Maximum length 100
  .has()
  .uppercase()
  // Must have uppercase letters
  .has()
  .lowercase()
  // Must have lowercase letters
  .has()
  .digits(2)
  // Must have at least 2 digits
  .has()
  .not()
  .spaces()
  // Should not have spaces
  .is()
  .not()
  .oneOf(["Passw0rd", "Password123"]);
// Blacklist these values

export const validatePassword = (req, res, next) => {
  if (passwordSchema.validate(req.body.password)) {
    next();
  } else {
    return res.status(400).json({
      error: `Le mot de passe n'est pas assez fort 
      ${passwordSchema.validate("req.body.password", { list: true })}`,
    });
  }

  if(req.body.password !== req.body.confirmPassword) {
    return res.status(400).json({
      error: "password and confirmPassword don't match"
    })
  }
};
