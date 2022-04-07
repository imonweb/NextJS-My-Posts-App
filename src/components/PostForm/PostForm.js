import React from 'react'
import styles from 'PostForm.module.scss';

const PostForm = () => {
  return (
    <form action="">
      <textarea className={styles.formContent} id="" cols="30" rows="10"></textarea>
      {/* <textarea className={formContent} id="" cols="30" rows="10"></textarea> */}
      <button className={styles.formButton}>Add New Post</button>
      {/* <button className={formButton}>Asdd New Post</button> */}
    </form>
  )
}

export default PostForm