import React from 'react'
import Radio from 'components/radio/Radio'
import styles from './amountperpage.module.css'

type IAmountPerPage = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  perPage: number | string
}

const AmountPerPage: React.FC<IAmountPerPage> = ({ onChange, perPage }) => {
  return (
    <div className={styles.wrapper}>
      <div>Результаты поиска</div>
      <div className={styles.radiogroup}>
        <Radio
          onChange={onChange}
          checked={30 === Number(perPage)}
          name="perpage"
          label="30"
          value={30}
          wrapperClassName="mr20"
        />
        <Radio
          onChange={onChange}
          checked={50 === Number(perPage)}
          name="perpage"
          label="50"
          value={50}
          wrapperClassName="mr20"
        />
        <Radio
          onChange={onChange}
          checked={100 === Number(perPage)}
          name="perpage"
          label="100"
          value={100}
        />
      </div>
    </div>
  )
}

export default AmountPerPage
