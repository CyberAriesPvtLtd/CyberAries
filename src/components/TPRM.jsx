import React from "react"
import './TPRM.css'

export default function TPRM(){
    return(
        <>
        <div className="TPRM section">
        <section class="tprm-maturity">
  <h2>TPRM Maturity Model</h2>

  <div class="maturity-grid">

    <div class="maturity-card">
      <h3>Level 1</h3>
      <p className="tags">Initial</p>
      <p>No formal third-party risk management process.</p>
    </div>

    <div class="maturity-card">
      <h3>Level 2</h3>
      <p className="tags">Developing</p>
      <p>Basic vendor risk assessments and policies.</p>
    </div>

    <div class="maturity-card">
      <h3>Level 3</h3>
      <p className="tags">Defined</p>
      <p>Standardized third-party risk management framework.</p>
    </div>
        <div className="maturity-card">
  <h3>Level 4</h3>
  <p className="tags">Standardized</p>
  <p>Consistent policies across vendors.</p>
</div>
    <div class="maturity-card">
      <h3>Level 5</h3>
      <p className="tags">Managed</p>
      <p>Continuous monitoring and automated risk scoring.</p>
    </div>

    <div class="maturity-card">
      <h3>Level 6</h3>
      <p className="tags">Optimized</p>
      <p>Advanced analytics and integrated risk intelligence.</p>
    </div>

  </div>
</section>
<section class="tprm-cta">
  <div class="tprm-overlay">

    <div class="tprm-content">

      <h2>Assess Your TPRM Maturity Today</h2>

      <p>
        Understand your organization’s third-party risk posture and identify
        gaps in your vendor risk management program with CyberAries experts.
      </p>

      <div class="tprm-buttons">
        <a href="/contact" class="tprm-btn-primary">
          Request Assessment
        </a>

        <a href="/services/tprm" class="tprm-btn-secondary">
          Learn More
        </a>
      </div>

    </div>

  </div>
</section>
</div>
        </>
    )
}