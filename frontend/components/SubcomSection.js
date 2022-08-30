import { Component } from 'react'
import styles from '../styles/Team.module.css'

class SubCom extends Component {
  render() {
    return (
      <div className={styles.subcomRow}>
        <div className={styles.subcomCol}>
          <div className={styles.profile}>
            <p className={styles.subcomProfileName}>{this.props.name}</p>
          </div>
        </div>

        <div className={styles.subcomLongerCol}>
          <div className={styles.profile}>
            <p className={styles.subcomProfileDegree}>
              {this.props.degree + ', ' + this.props.year + ' year'}
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default SubCom
