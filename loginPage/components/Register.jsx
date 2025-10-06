import { useEffect, useState, useMemo } from "react";
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardHeader,
  FormFeedback,
} from "reactstrap";
export default function Register() {
  const initialValues = {
    ad: "",
    soyad: "",
    email: "",
    Sifre: "",
  };

  const errorMessages = {
    ad: "Adinizi en az 3 karakter giriniz",
    soyad: "Soyadi en az 3 karakter giriniz",
    email: "Emailinizi giriniz",
    Sifre:
      "En az 8 karakter, bir büyük harf, bir küçük harf, bir sembol ve bir rakam içermelidir",
  };

  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({
    ad: false,
    soyad: false,
    email: false,
    Sifre: false,
  });

  const [isValid, setIsValid] = useState(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const regex = useMemo(() => /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/, []);
  useEffect(() => {
    if (
      formData.ad.trim().length >= 3 &&
      formData.soyad.trim().length >= 3 &&
      validateEmail(formData.email) &&
      regex.test(formData.Sifre)
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [formData, regex]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "ad" || name === "soyad") {
      if (value.trim().length >= 3) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "email") {
      if (validateEmail(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }

    if (name === "Sifre") {
      if (regex.test(value)) {
        setErrors({ ...errors, [name]: false });
      } else {
        setErrors({ ...errors, [name]: true });
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;
  };

    return (
      <Card>
        <CardBody>
          <CardHeader>Kayit Ol</CardHeader>
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="ad">Ad</Label>
              <Input
                id="ad"
                name="ad"
                placeholder="Adınızı girin"
                type="text"
                onChange={handleChange}
                value={formData.ad}
                invalid={errors.ad}
              />
            </FormGroup>
            {errors.ad && <FormFeedback>{errorMessages.ad}</FormFeedback>}
            <FormGroup>
              <Label for="soyad">Soyad</Label>
              <Input
                id="soyad"
                name="soyad"
                placeholder="Soyadınızı girin"
                type="text"
                onChange={handleChange}
                value={formData.soyad}
                invalid={errors.soyad}
              />
            </FormGroup>
            {errors.soyad && <FormFeedback>{errorMessages.soyad}</FormFeedback>}
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                id="email"
                name="email"
                placeholder="Emailinizi girin"
                type="email"
                onChange={handleChange}
                value={formData.email}
                invalid={errors.email}
              />
            </FormGroup>
            {errors.email && <FormFeedback>{errorMessages.email}</FormFeedback>}
            <FormGroup>
              <Label for="Sifre">Sifre</Label>
              <Input
                id="Sifre"
                name="Sifre"
                placeholder="Sifrenizi girin"
                type="password"
                onChange={handleChange}
                value={formData.Sifre}
                invalid={errors.Sifre}
              />
            </FormGroup>
            {errors.Sifre && <FormFeedback>{errorMessages.Sifre}</FormFeedback>}
            <Button disabled={!isValid}>Kayit Ol</Button>
          </Form>
        </CardBody>
      </Card>
    );
  }
