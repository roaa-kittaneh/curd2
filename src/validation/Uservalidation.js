export const validationUserData = (user) => {
    let errors = {};
  
    if (user.name.trim() === "") {
      errors.name = "Name is required";
    } else if (user.name.trim().length < 3) {
      errors.name = "Name must be at least 3 characters";
    }

    if (user.email.trim() === "") {
        errors.email = "email is required";
      } else if (user.email.trim().length < 7) {
        errors.email = "email must be at least 7 characters";
      }

      if (user.password.trim() === "") {
        errors.password = "password is required";
      } else if (user.password.trim().length < 5) {
        errors.password = "password must be at least 5 characters";
      }
      
    
  
    return errors;
  };
  
