import React from 'react'

import styles from './tags.module.css'

type TagsProps = {
  tags: string[]
  selected?: string | null
  handleLangSelect: (lang: string) => void
}

const Tags: React.FC<TagsProps> = ({ tags, selected, handleLangSelect }) => {
  return (
    <div className={styles.tagsWrap}>
      {tags.map(tag => (
        <div
          key={tag}
          onClick={() => handleLangSelect(tag)}
          className={`${styles.tag} ${
            selected === tag ? styles.tagSelected : ''
          }`}
        >
          {tag}
        </div>
      ))}
    </div>
  )
}

export default Tags
