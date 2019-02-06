import React from 'react'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import FormRadioController from '../../redstone-form/components/FormRadioController'

import FormRadio from '../components/FormRadio'
import { numberNormalizer } from '../../redstone-form/normalizers/numberNormalizer'

import { mustBeDefined } from '../../redstone-form/validators/mustBeDefined'
import { greaterThan } from '../../redstone-form/validators/greaterThan'
import DataController from '../../redstone-form/components/DataController'


const CardsFormRadio = () => {
  return (
    <Grid key={2} item>
      <Card>
        <CardContent>
          <Typography color="textSecondary">
            Radio example
          </Typography>

          <FormRadioController
            name="radio"
            path="aRadioExample"
            label="Select a value:"
            values={[
              { label: '5', value: 5, disabled: false },
              { label: '10', value: 10, disabled: false },
              { label: '20', value: 20, disabled: false },
              { label: '30', value: 30, disabled: false },
              { label: '40', value: 40, disabled: false }
            ]}
            normalizer={numberNormalizer}
            submitValidation={[(v) => mustBeDefined(v, 'Mandatory field'), (v) => greaterThan(v, 10, 'must be greater than 10')]}
            formComponent={FormRadio}
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
