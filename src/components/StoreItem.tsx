import { string } from "prop-types"
import { Button, Card, Container,} from "react-bootstrap"
import { formatCurrency } from "../utilities/FormatCurrency"

type StoreItemProps={
    id:number,
    name:string,
    price:number,
    imgUrl:string
}

export function StoreItem({id,name,price,imgUrl}:StoreItemProps){

    const quantity=0
   return( 
     
   <Card className='h-100'>
     <Card.Img variant='top' 
      src={imgUrl} 
      style={{height:"200px",objectFit:'cover'}}
      /> 
        <Card.Body className='d-flex flex-column'>
           <Card.Title className='d-flex justify-content-space-between align-items-baseline mb-4'>
             <Container className='fs-2'>{name}</Container>
             <Container className='ms-2 text-muted'>{formatCurrency(price)}</Container>
           </Card.Title>
           <Container >
              {quantity === 0 ? <Button className='w-100'>+ Add To Card </Button> : <Container className='d-flex 
               align-items-center flex-column' style={{gap:".5rem"}}>
                  
                    <Container className='d-flex align-items-center justify-content-center' style={{gap:".5rem"}} >
                        <Button>-</Button>
                            <Container>
                                <Container>{quantity} in cart</Container>
                            </Container>
                        <Button>+</Button>
                    </Container>
                    <Button variant='danger' size='sm'>Remove</Button>
              </Container>
              }
           </Container>
        </Card.Body>
    </Card>

   )
}