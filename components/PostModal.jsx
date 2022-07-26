import React, { useContext } from 'react'
import { BlogsiteContext } from '../context/BlogsiteContext'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const styles = {
  wrapper: 'w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll',
  title: 'my-[2rem] font-bold text-3xl',
  smallField: 'w-full flex justify-between gap-[1rem] ',
  fieldTitle: 'flex-1 text-end',
  inputContainer: 'flex-[5] h-min border-2 border-[#787878]',
  inputField: 'w-full border-0 outline-none bg-transparent',
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full',

  errorField: '',
  errorContainer: '',
  errorText: 'text-red-400 text-1xl'
}

const registerSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'This must be at least 3 characters long')
    .max(50, 'Sorry, this must be under 50 characters long')
    .required('Required'),
  brief: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(100, 'Sorry, this must be under 100 characters long')
    .required('Required'),
  category: Yup.string()
    .min(2, 'This must be at least 2 characters long')
    .max(15, 'Sorry, this must be under 15 characters long')
    .required('Required'),
  postLength: Yup.number()
    .min(1, 'Surely this will take at-least 1min to read?')
    .max(30, 'Longer than 30mins to read? You know this is the internet right?')
    .required('Required'),
  bannerImage: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Enter correct url!')
    .required('Please enter website'),
  body: Yup.string()
    .min(50, 'This must be at least 20 characters long')
    .max(2500, 'Sorry, this must be under 2500 characters long')
    .required('Required')

})

const PostModal = () => {
  const router = useRouter()
  const { currentUser } = useContext(BlogsiteContext)

  const formik = useFormik({
    initialValues: {
      title: '',
      brief: '',
      category: '',
      postLength: '',
      bannerImage: '',
      body: ''
    },

    validationSchema: registerSchema,

    onSubmit: async values => {
      await addDoc(collection(db, 'articles'), {
        bannerImage: values.bannerImage,
        body: values.body,
        category: values.category,
        brief: values.brief,
        title: values.title,
        postLength: Number(values.postLength),
        postedOn: serverTimestamp(),
        author: currentUser.email
      })
      setTimeout(() => {
        alert('your post has been submitted')
        router.push('./')
      }, 1000)
    }
  })

  return (
    <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
      <div className={styles.title}>Create a post</div>

      <div className={styles.smallField}>
        <label htmlFor='Title' className={styles.fieldTitle}>Title</label>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            id='title'
            type='text'
            placeholder='mole'
            {...formik.getFieldProps('title')}
          />
        </span>
        <div className={styles.errorText}>
          {formik.touched.title && formik.errors.title}
        </div>
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Brief' className={styles.fieldTitle}>Brief</label>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            id='brief'
            type='text'
            placeholder=''
            {...formik.getFieldProps('brief')}
          />
        </span>
        <div className={styles.errorText}>
          {formik.touched.brief && formik.errors.brief}
        </div>
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Brief' className={styles.fieldTitle}>Category</label>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            id='category'
            type='text'
            placeholder=''
            {...formik.getFieldProps('category')}
          />
        </span>
        <div className={styles.errorText}>
          {formik.touched.category && formik.errors.category}
        </div>
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Post Length' className={styles.fieldTitle}>Estimated Read Length (mins) </label>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            id='postLength'
            type='number'
            placeholder=''
            {...formik.getFieldProps('postLength')}
          />
        </span>
        <div className={styles.errorText}>
          {formik.touched.postLength && formik.errors.postLength}
        </div>
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Banner Image' className={styles.fieldTitle}>Banner Image Link (mins) </label>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            id='bannerImage'
            type='text'
            placeholder=''
            {...formik.getFieldProps('bannerImage')}
          />
        </span>
        <div className={styles.errorText}>
          {formik.touched.bannerImage && formik.errors.bannerImage}
        </div>
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Article Text' className={styles.fieldTitle}>Article Text</label>
        <span className={styles.inputContainer}>
          <textarea
            className={styles.inputField}
            id='body'
            type='text'
            placeholder=''
            rows='12'
            {...formik.getFieldProps('body')}
          />
        </span>
        <div className={styles.errorText}>
          {formik.touched.body && formik.errors.body}
        </div>
      </div>

      <button className={styles.accentedButton} type='submit'>
        Submit
      </button>

    </form>

  )
}
export default PostModal
