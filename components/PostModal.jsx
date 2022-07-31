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
    .min(2, 'Surely this will take at-least 1min to read?')
    .max(30, 'Longer than 30mins to read? You know this is the internet right?!')
    .required('Please input a number'),
  bannerImage: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      'Please enter a correct url')
    .required('Please enter webs link to an image'),
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
            placeholder=' Why did the chicken cross the road?'
            {...formik.getFieldProps('title')}
          />
        </span>
      </div>
      <div className={styles.errorText}>
        {formik.touched.title && formik.errors.title}
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Brief' className={styles.fieldTitle}>Brief</label>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            id='brief'
            type='text'
            placeholder=' Sadly, you&apos;ve been told the wrong story for years.'
            {...formik.getFieldProps('brief')}
          />
        </span>
      </div>
      <div className={styles.errorText}>
        {formik.touched.brief && formik.errors.brief}
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Brief' className={styles.fieldTitle}>Category</label>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            id='category'
            type='text'
            placeholder=' Fairy tales'
            {...formik.getFieldProps('category')}
          />
        </span>
      </div>
      <div className={styles.errorText}>
        {formik.touched.category && formik.errors.category}
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Post Length' className={styles.fieldTitle}>Estimated Read Length (mins) </label>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            id='postLength'
            type='number'
            placeholder=' 2'
            {...formik.getFieldProps('postLength')}
          />
        </span>
      </div>
      <div className={styles.errorText}>
        {formik.touched.postLength && formik.errors.postLength}
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Banner Image' className={styles.fieldTitle}>Banner Image Link</label>
        <span className={styles.inputContainer}>
          <input
            className={styles.inputField}
            id='bannerImage'
            type='text'
            placeholder=' www.dummyimage.com/600x400'
            {...formik.getFieldProps('bannerImage')}
          />
        </span>
      </div>
      <div className={styles.errorText}>
        {formik.touched.bannerImage && formik.errors.bannerImage}
      </div>

      <div className={styles.smallField}>
        <label htmlFor='Article Text' className={styles.fieldTitle}>Article Text</label>
        <span className={styles.inputContainer}>
          <textarea
            className={styles.inputField}
            id='body'
            type='text'
            placeholder='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Si qua in iis corrigere voluit, deteriora fecit. ALIO MODO. Et quidem, inquit, vehementer errat; Beatus sibi videtur esse moriens. Verum hoc idem saepe faciamus. Duo Reges: constructio interrete. Estne, quaeso, inquam, sitienti in bibendo voluptas? Utram tandem linguam nescio?

            Quid ait Aristoteles reliquique Platonis alumni? Eademne, quae restincta siti? Non quam nostram quidem, inquit Pomponius iocans; Ille vero, si insipiens-quo certe, quoniam tyrannus -, numquam beatus; Quid ad utilitatem tantae pecuniae? Mihi enim satis est, ipsis non satis.

            Tamen a proposito, inquam, aberramus. Satis est ad hoc responsum. Prave, nequiter, turpiter cenabat; Iam id ipsum absurdum, maximum malum neglegi.

            Tum Torquatus: Prorsus, inquit, assentior; Nam Pyrrho, Aristo, Erillus iam diu abiecti. Non quam nostram quidem, inquit Pomponius iocans;

            '
            rows='12'
            {...formik.getFieldProps('body')}
          />
        </span>
      </div>
      <div className={styles.errorText}>
        {formik.touched.body && formik.errors.body}
      </div>

      <button className={styles.accentedButton} type='submit'>
        Submit
      </button>

    </form>

  )
}
export default PostModal
