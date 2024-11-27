import React, { useState, useRef } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDropzone } from "react-dropzone";
import emailjs from '@emailjs/browser';

const Add = () => {
  const { user } = useAuth();
  const [leave, setLeave] = useState({ userId: user._id });
  const [images, setImages] = useState([]);
  const [uploadedImageUrls, setUploadedImageUrls] = useState([]);
  const navigate = useNavigate();
  const refForm = useRef();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setLeave((prevState) => ({ ...prevState, [name]: value }));
  };

  const onDrop = (acceptedFiles) => {
    setImages(acceptedFiles);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Upload images to Cloudinary
      const formData = new FormData();
      images.forEach((file) => formData.append("images", file));

      const uploadResponse = await axios.post(
        "https://pichon-server.onrender.com/api/leave/upload-images",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      const uploadedUrls = uploadResponse.data.images.map((img) => img.url);
      setUploadedImageUrls(uploadedUrls);

      // Add leave data along with image URLs
      const leaveResponse = await axios.post(
        "https://pichon-server.onrender.com/api/leave/add",
        { ...leave, images: uploadedUrls },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (leaveResponse.data.success) {
        navigate(`/employee-dashboard/leaves/${user._id}`);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred while submitting the form.");
    }


    emailjs
    .sendForm('service_4opaas4', 'template_6q1ey0i', refForm.current, {
      publicKey: 'sEq9Zuwfom1VxugjE',
    })
    .then(
      () => {
        alert('Éxito! registro enviado, Gracias!');
        window.location.reload(false)
      },
      (error) => {
        console.log('Message failed, Please try again :)', error.text);
      },
    );




  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div className='max-w-4xl mx-auto mt-10 bg-white p-8 rounded-md shadow-md'>
    <h2 className='text-2xl font-bold mb-6'>Agregar Incidencia</h2>
    <form ref={refForm} onSubmit={handleSubmit}>
        <div className='flex flex-col space-y-4'>
            <div>
                <label className='block text-sm font-medium text-gray-700'>
                    Tipo de Incidencia
                </label>
                <select
                    name='leaveType'
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                >
                    <option value="">Seleccionar</option>
                    <option value="Falla en la unidad">Falla en la unidad</option>
                    <option value="Siniestro">Siniestro</option>
                </select>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        Fecha
                    </label>
                    <input 
                        type='date'
                        name='startDate'
                        onChange={handleChange}
                        className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                        required
                    />
                </div>


                <div>
                <label className='block text-sm font-medium text-gray-700'>
                    Económico
                </label>
                <input
                    name='economico'
                    type='text'
                    placeholder='Económico'
                    onChange={handleChange}
                    className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                    required
                />
            </div>
                {/* <div>
                    <label className='block text-sm font-medium text-gray-700'>
                        To Date
                    </label>
                    <input 
                        type='date'
                        name='endDate'
                        onChange={handleChange}
                        className='mt-1 p-2 block w-full border border-gray-300 rounded-md'
                        required
                    />
                </div> */}
            </div>

            <div>
                <label className='block text-sm font-medium text-gra-700'>
                    Descripción
                </label>
                <textarea
                    name='reason'
                    placeholder='Descripción de la Incidencia'
                    onChange={handleChange}
                    className='w-full border border-gray-300 p-2'
                    required
                    rows="5"
                > </textarea>
            </div>
        

          <div {...getRootProps()} className="p-4 border-dashed border-2 border-gray-300 rounded-md">
            <input {...getInputProps()} />
            <p className="text-center text-gray-500">Arrastra las imágenes aquí o haz clic para seleccionar</p>
          </div>

          <div className="flex flex-wrap gap-4 mt-4">
            {images.map((file, index) => (
              <img
                key={index}
                src={URL.createObjectURL(file)}
                alt={`preview-${index}`}
                className="h-20 w-20 object-cover rounded-md"
              />
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full mt-6 bg-[#0D6194] hover:bg-black text-white font-bold py-2 px-4 rounded"
        >
          Enviar Incidencia
        </button>
      </form>
    </div>
  );
};

export default Add;
