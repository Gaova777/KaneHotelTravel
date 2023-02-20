import React, {useState, useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { getCities } from "../../redux/actions";
import {City, Record} from "../../utils/interfaces";
import {Input, Button, CreateNav} from "../../components/Form/index";
import styleForm from "../../components/Form/Form.module.css"
import style from './CreateHotel.module.css'
import { Link } from "react-router-dom";

const CreateHotel: React.FC = () =>{
  const [record, setRecord] = useState<Record>({})
  const dispatch = useAppDispatch()
  const allCities:Array<City> = useAppSelector((state) => state.cities)

  useEffect(() => {
    dispatch(getCities() as any)
  },[dispatch])

  const formik = useFormik({
    initialValues: {
      name: '',
      image: '',
      services: '',
      description: '',
      category: '',
      city: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Nombre obligatorio").max(100, "El nombre debe tener como máximo 100 caracteres"),
      image: Yup.string().url("La imagen debe ser una URL válida")
    }),
    onSubmit: (formData) => {
      
      fetch(`${import.meta.env.VITE_URL_BACKEND}/hotel`, {
        method: "POST",
        body: JSON.stringify({...formData, rooms: ['Habitación Deluxe']}),
        headers: { "Content-type": "application/json; charset=UTF-8" }
        //{...formData, rooms: ['Habitación Deluxe']}
      })
      .then(response => response.json())
      .then( res => {
        if (res.hasOwnProperty('error')) {
          setRecord({error: res.error})
        }else{
          setRecord({registered: true, response: {...res, message: '¡Hotel registrado exitosamente!'}})
        }
      })
      .catch((err:any) => setRecord({error: err.message}))  
    
    },
  });

  return (
    record.registered === true
      ?<div> <p>Registro Exitoso{JSON.stringify(record.response)} </p>
      <Link to={"/"}><button>Volver a Inicio</button></Link>
      </div>
      : 
    <div className={style.formContainer}>
      <CreateNav value="Regresar" url="/"/>
      <form onSubmit={formik.handleSubmit}>
      <h3 className={style.formNote}>Campos con * son obligatorios.</h3>
        {record.error && <h2 className="errorMessage">{record.error}</h2>}
        <Input
          name="name"
          type="text"
          placeholder="Nombre(*): Maximo 100 letras"
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name}
        />
        <Input
          name="image"
          type="text"
          placeholder="Imagen: (Url)"
          onChange={formik.handleChange}
          value={formik.values.image}
          error={formik.errors.image}
        />
        <Input
          name="services"
          type="text"
          placeholder="Servicios"
          onChange={formik.handleChange}
          value={formik.values.services}
          error={formik.errors.services}
        />
        <Input
          name="description"
          type="text"
          placeholder="Descripción"
          onChange={formik.handleChange}
          value={formik.values.description}
          error={formik.errors.description}
        />
        <Input
          name="category"
          type="text"
          placeholder="Categoría"
          onChange={formik.handleChange}
          value={formik.values.category}
          error={formik.errors.category}
        />
        <div>
          <select name="city" onChange={formik.handleChange} value={formik.values.city} className={style.select} >
            <option value="">Ciudad</option>
            {allCities.map(cityDb => (
              <option value={cityDb.name} key={cityDb.id}>{cityDb.name}</option>
            ))}
          </select>
          <p className={styleForm.errorMessage}>{formik.errors.city && formik.errors.city}</p>
        </div>

        <section className={style.buttonContainer}>
          <Button type="submit" value="Registrar" />
          <Button type="reset" value="Limpiar" onClick={formik.handleReset} />
        </section>
        
       </form>
    </div>
  )
}

export default CreateHotel;