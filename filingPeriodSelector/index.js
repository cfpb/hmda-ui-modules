import React from 'react'
import PropTypes from 'prop-types'

var filingPeriods = ['2018', '2017']

var FilingPeriodSelector = props => {
  return (
    <form className="FilingPeriodSelector usa-form">
      <select value={props.filingPeriod} onChange={props.onChange}>
        {filingPeriods.map(filingPeriod => {
          return (
            <option key={filingPeriod} value={filingPeriod}>
              {filingPeriod}
            </option>
          )
        })}
      </select>
    </form>
  )
}

FilingPeriodSelector.propTypes = {
  filingPeriod: PropTypes.string,
  onChange: PropTypes.func
}

export default FilingPeriodSelector
