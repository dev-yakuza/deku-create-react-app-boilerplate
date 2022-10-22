import { Fab } from '@mui/material'
import { styled } from '@mui/system'
import { Link } from 'react-router-dom'

const Button = styled(Fab)`
  position: absolute;
  right: 40px;
  bottom: 40px;
`

interface Props {
  readonly link: string
  readonly children: React.ReactNode
}

export const FloatingActionLink = ({ link, children }: Props) => {
  return (
    <Link to={link}>
      <Button color="primary" aria-label="add">
        {children}
      </Button>
    </Link>
  )
}
