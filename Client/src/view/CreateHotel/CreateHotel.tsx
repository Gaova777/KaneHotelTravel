import React, {useState, useEffect} from "react";
import { useAppDispatch, useAppSelector } from "../../redux/Hooks/Hooks";
import { useFormik } from 'formik';
import * as Yup from "yup";
import { getCities } from "../../redux/actions";
import {City, Record} from "../../utils/interfaces";
import {Input, Button} from "../../components/Form/index";
import styleForm from "../../components/Form/Form.module.css"

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
      name: Yup.string().required("Nombre obligatorio")
    }),
    onSubmit: (formData) => {
      console.log("formData: ",formData);
      
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
      ? <p>Vamos a cargar el componente HotelDetail {JSON.stringify(record.response)} </p>
      : 
    <div>
      <form onSubmit={formik.handleSubmit}>
        {record.error && <h2>{record.error}</h2>}
        <Input
          name="name"
          type="text"
          placeholder="Nombre(*): "
          onChange={formik.handleChange}
          value={formik.values.name}
          error={formik.errors.name}
        />
        <Input
          name="image"
          type="text"
          placeholder="Imagen"
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
          <select name="city" onChange={formik.handleChange} value={formik.values.city}>
            <option value="">Ciudad</option>
            {allCities.map(cityDb => (
              <option value={cityDb.name} key={cityDb.id}>{cityDb.name}</option>
            ))}
          </select>
          <p className={styleForm.errorMessage}>{formik.errors.city && formik.errors.city}</p>
        </div>

        <Button type="submit" value="Registrar" />
        <Button type="reset" value="Limpiar" onClick={formik.handleReset} />
        
       </form>
    </div>
  )
}

export default CreateHotel;