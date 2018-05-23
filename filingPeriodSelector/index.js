import React from 'react'
import PropTypes from 'prop-types'

const filingPeriods = ['2018', '2017']

const isSelected = (loopPeriod, selectedPeriod) => {
  if (loopPeriod === selectedPeriod) return true
  return false
}

const FilingPeriodSelector = props => {
  return (
    <form className="FilingPeriodSelector usa-form">
      <select onChange={props.onChange}>
        {filingPeriods.map(filingPeriod => {
          return (
            <option
              key={filingPeriod}
              value={filingPeriod}
              selected={isSelected(filingPeriod, props.filingPeriod)}
            >
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
