import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import FormInputController from '../../redstone-form/components/FormInputController'

import { numberNormalizer } from '../../redstone-form/normalizers/numberNormalizer'
import FormInput from '../components/FormInput'
import { mustBeDefined } from '../../redstone-form/validators/mustBeDefined'
import { greaterThan } from '../../redstone-form/validators/greaterThan'
import DataController from '../../redstone-form/components/DataController'


const CardsFormRadio = () => {
  return (
    <Grid key={1} item>
      <Card>
        <CardContent>
          <Typography color="textSecondary">
            Input Example:
          </Typography>

          <FormInputController
            name="theName"
            path="thePath1"
            label="Enter a number"
            normalizer={numberNormalizer}
            submitValidation={[(v) => mustBeDefined(v, 'must be defined'), (v)=> greaterThan(v, 10, 'must be greater than 10')]}
            formComponent={FormInput}
          />
        </CardContent>
        <CardActions>
          <Button onClick={() => {
            DataController.setSubmitErrorForDisplay()
          }}
          >
            setSubmitErrorForDisplay!
          </Button>
        </CardActions>
      </Card>
    </Grid>

  )
}

export default CardsFormRadio
