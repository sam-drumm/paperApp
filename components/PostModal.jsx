import React, { useContext, useState } from 'react'
import { BlogsiteContext } from '../context/BlogsiteContext'
import { collection, addDoc, serverTimestamp } from 'firebase/firestore'
import { db } from '../firebase'
// import { useRouter } from 'next/router'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const styles = {
  wrapper: 'w-[70rem] h-[50rem] flex flex-col justify-start items-center gap-[1rem] p-[1rem] font-mediumSerif overflow-scroll',
  title: 'my-[2rem] font-bold text-3xl',
  smallField: 'w-full flex justify-between gap-[1rem]',
  fieldTitle: 'flex-1 text-end',
  inputContainer: 'flex-[5] h-min border-2 border-[#787878]',
  inputField: 'w-full border-0 outline-none bg-transparent',
  accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
  inputError: ''
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
    .min(50, 'This must be at least 2 characters long')
    .max(2500, 'Sorry, this must be under 15 characters long')
    .required('Required')

})

const PostModal = () => {
  // const router = useRouter()
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

    onSubmit: values => {
      return null
    }
  })

  // function showAnyErrors (inputName) {
  //   return formik.errors[inputName] && formik.touched[inputName]
  //     ? <p className={styles.inputError}>{formik.errors[inputName]}</p>
  //     : null
  // }

  // const [title, setTitle] = useState('')
  // const [brief, setBrief] = useState('')
  // const [category, setCategory] = useState('')
  // const [postLength, setPostLength] = useState('')
  // const [bannerImage, setBannerImage] = useState('')
  // const [body, setBody] = useState('')

  // const addPostToFireBase = async e => {
  //   e.preventDefault()

  //   await addDoc(collection(db, 'articles'), {
  //     bannerImage: bannerImage,
  //     body: body,
  //     category: category,
  //     brief: brief,
  //     postedOn: serverTimestamp(),
  //     postLength: Number(postLength),
  //     title: title,
  //     author: currentUser.email
  //   })
  //   // router.push('./')
  // }

  return (
    <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
      <div className={styles.title}>Create a post</div>

      <div className={styles.smallField}>
        <label htmlFor='Title' className={styles.fieldTitle}>Title</label>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            required
            name='title'
            id='title'
            type='text'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            // value={title}
            // onChange={e => setTitle(e.target.value)}
          />
          {formik.touched.title && formik.errors.title ? (
            <div>{formik.errors.title}</div>
          ) : null}
        </span>
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Brief' className={styles.fieldTitle}>Brief</label>
        <span className={styles.inputContainer}>
          {/* {showAnyErrors('brief')} */}
          <input
            className={styles.inputField}
            required
            name='brief'
            id='brief'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.brief}
            // value={title}
            // onChange={e => setTitle(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Category' className={styles.fieldTitle}>Category</label>
        <span className={styles.inputContainer}>
          {/* {showAnyErrors('category')} */}
          <input
            className={styles.inputField}
            required
            name='category'
            id='category'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.category}
            // value={title}
            // onChange={e => setTitle(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Post Length' className={styles.fieldTitle}>Estimated Read Length (mins)</label>
        <span className={styles.inputContainer}>
          {/* {showAnyErrors('postLength')} */}
          <input
            className={styles.inputField}
            required
            name='postLength'
            id='postLength'
            type='number'
            onChange={formik.handleChange}
            value={formik.values.postLength}
            // value={title}
            // onChange={e => setTitle(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <label htmlFor='bannerImage' className={styles.fieldTitle}>Banner Image Link</label>
        <span className={styles.inputContainer}>
          {/* {showAnyErrors('bannerImage')} */}
          <input
            className={styles.inputField}
            required
            name='bannerImage'
            id='bannerImage'
            type='text'
            onChange={formik.handleChange}
            value={formik.values.bannerImage}
            // value={title}
            // onChange={e => setTitle(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Article Text' className={styles.fieldTitle}>Article Text</label>
        <span className={styles.inputContainer}>
          {/* {showAnyErrors('body')} */}
          <textarea
            className={styles.inputField}
            required
            name='body'
            id='body'
            type='textarea'
            onChange={formik.handleChange}
            value={formik.values.body}
            rows='12'
            // value={title}
            // onChange={e => setTitle(e.target.value)}
          />
        </span>
      </div>

      {/* <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Brief</span>
        <span className={styles.inputContainer}>
          <input className={styles.inputField}
            type='text'
            value={brief}
            onChange={e => setBrief(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Banner Image URL</span>
        <span className={styles.inputContainer}>
          <input className={styles.inputField}
            type='text'
            value={bannerImage}
            onChange={e => setBannerImage(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Category</span>
        <span className={styles.inputContainer}>
          <input className={styles.inputField}
            type='text'
            value={category}
            onChange={e => setCategory(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Estimated Read Length (mins)</span>
        <span className={styles.inputContainer}>
          <input className={styles.inputField}
            type='text'
            value={postLength}
            onChange={e => setPostLength(e.target.value)}
          />
        </span>
      </div>

      <div className={styles.smallField}>
        <span className={styles.fieldTitle}>Article Text</span>
        <span className={styles.inputContainer}>
          <textarea className={styles.inputField}
            type='text'
            rows='12'
            value={body}
            onChange={e => setBody(e.target.value)}
          />
        </span>
      </div> */}

      <button className={styles.accentedButton} type='submit'>
        Submit
      </button>

    </form>

  )
}
export default PostModal
