import { Button } from 'antd'
import { useContext } from 'react'
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import { BrandContext } from '../../../config/context.tsx'

const SearchButton = ({ showText }: { showText: boolean }) => {
  const { data, setLoading, setBlank } = useContext(BrandContext)

  const submitHandler = () => {
    setBlank(false)
    setLoading(true)
    //setInterval(() => setLoading(false), 5000);
    console.table(data)
  }

  return (
    <Button
      type="primary"
      size="large"
      icon={<FontAwesomeIcon icon={faMagnifyingGlass} />}
      onClick={submitHandler}
      className={showText ? 'iconic-button' : ''}
      style={{ width: showText ? '110px' : '40px' }}
    >
      {showText && 'Buscar'}
    </Button>
  )
}

export default SearchButton
