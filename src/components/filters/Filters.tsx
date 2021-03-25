import React from 'react'
import TextInput from 'components/textinput/TextInput'

import styles from './filters.module.css'
import Tags from 'components/tags/Tags'

const PLANGS = ['C', 'C++', 'C#', 'Haskell', 'Ruby', 'HTML', 'JavaScript']

type FiltersProps = {
  selectedLang?: string | null
  handleLangSelect: (lang: string) => void
  firstInputName: string
  firstInputValue?: number | string
  firstInputLabel?: string
  firstInputPlaceholder: string
  secondInputName: string
  secondInputValue?: number | string
  secondInputLabel: string
  secondInputPlaceholder: string
  showFilter: boolean
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  toggleFilterShow: () => void
}

const Filters: React.FC<FiltersProps> = ({
  selectedLang,
  handleLangSelect,
  firstInputName,
  firstInputValue,
  firstInputLabel,
  firstInputPlaceholder,
  secondInputName,
  secondInputValue,
  secondInputLabel,
  secondInputPlaceholder,
  handleInputChange,
  toggleFilterShow,
  showFilter
}) => {
  return (
    <>
      <div className={styles.btn} onClick={toggleFilterShow}>
        Показать фильтры
      </div>
      {showFilter && (
        <div className={styles.wrapper}>
          <div className={styles.inputField}>
            <TextInput
              name={firstInputName}
              value={firstInputValue}
              onChange={handleInputChange}
              label={firstInputLabel}
              type="number"
              placeholder={firstInputPlaceholder}
            />
          </div>
          <div className={styles.inputField}>
            <TextInput
              name={secondInputName}
              value={secondInputValue}
              onChange={handleInputChange}
              label={secondInputLabel}
              type="number"
              placeholder={secondInputPlaceholder}
            />
          </div>
          <div className={styles.langs}>
            <div className={styles.langsLabel}>Языки программирования</div>
            <div className={styles.langsWrap}>
              <Tags
                tags={PLANGS}
                selected={selectedLang}
                handleLangSelect={handleLangSelect}
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Filters
