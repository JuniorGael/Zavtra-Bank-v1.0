export const langController = (req, res) => {
  const { chooseLang } = req.body;

  try {
    let langDict = {};
    console.log("langFROMclient:" + req.body.chooseLang);



    switch (chooseLang) {
      case "eng":
        langDict = {
          login: "Login",
          logout: "Logout",
        };
        break;

      case "ru":
        langDict = {
          login: "Вход",
          logout: "Выход",
        };
        break;

      case "fr":
        langDict = {
          login: "Se Connecter",
          logout: "Se Deconnecter",
        };
        break;

      default:
        break;
    }

    return res.status(200).json({
      langdic: langDict,
    });
  } catch (error) {
    console.log(error);
  }
};
