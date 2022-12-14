import { css } from "styled-components";
import { responsive } from "styles/Abstract/Breakpoints";

export const Utilities = css`
  /* Margins */
  /* margin top and bottom */
  .my-80 {
    --margin-value: 8rem;
    margin-top: var(--margin-value);
    margin-bottom: var(--margin-value);
  }
  .my-50 {
    --margin-value: 5rem;
    margin-top: var(--margin-value);
    margin-bottom: var(--margin-value);
  }
  .my-30 {
    --margin-value: 3rem;
    margin-top: var(--margin-value);
    margin-bottom: var(--margin-value);
  }
  /* End of margin top and bottom */

  /* margin autos */
  .ml-auto {
    margin-left: auto;
  }
  .mx-auto {
    margin-inline: auto;
  }
  /* End of margin autos */

  /* margin tops */
  .mt-120 {
    margin-top: 12rem;
  }
  .mt-100 {
    margin-top: 10rem;
  }
  .mt-90 {
    margin-top: 9rem;
  }
  .mt-80 {
    margin-top: 8rem;
  }
  .mt-77 {
    margin-top: 7.7rem;
  }
  .mt-70 {
    margin-top: 7rem;
  }
  .mt-60 {
    margin-top: 6rem;
  }
  .mt-50 {
    margin-top: 5rem;
  }
  .mt-42 {
    margin-top: 4.2rem;
  }
  .mt-40 {
    margin-top: 4rem;
  }
  .mt-30 {
    margin-top: 3rem;
  }
  .mt-22 {
    margin-top: 2.2rem;
  }
  .mt-20 {
    margin-top: 2rem;
  }
  .mt-18 {
    margin-top: 1.8rem;
  }
  .mt-15 {
    margin-top: 1.5rem;
  }
  .mt-12 {
    margin-top: 1.2rem;
  }
  .mt-10 {
    margin-top: 1rem;
  }
  .mt-5 {
    margin-top: 0.5rem;
  }
  .mt-3 {
    margin-top: 0.3rem;
  }
  /* End of margin tops */

  /* margin Bottoms */
  .mb-100 {
    margin-bottom: 10rem;
  }
  .mb-80 {
    margin-bottom: 8rem;
  }
  .mb-70 {
    margin-bottom: 7rem;
  }
  .mb-60 {
    margin-bottom: 6rem;
  }
  .mb-50 {
    margin-bottom: 5rem;
  }
  .mb-40 {
    margin-bottom: 4rem;
  }
  .mb-35 {
    margin-bottom: 3.5rem;
  }
  .mb-30 {
    margin-bottom: 3rem;
  }
  .mb-25 {
    margin-bottom: 2.5rem;
  }
  .mb-20 {
    margin-bottom: 2rem;
  }
  .mb-16 {
    margin-bottom: 1.6rem;
  }
  .mb-15 {
    margin-bottom: 1.5rem;
  }
  .mb-10 {
    margin-bottom: 1rem;
  }
  /* End of margin Bottoms */

  /* margin left */
  .ml-10 {
    margin-left: 1rem;
  }
  .ml-5 {
    margin-left: 0.5rem;
  }
  /* End of margin left */

  /* margin right */
  .mr-40 {
    margin-right: 4rem;
  }
  /* End of margin right */
  /* End of Margins */

  /* Texts */
  .textCenter {
    text-align: center;
  }
  .text-center {
    text-align: center;
  }
  .text-uppercase {
    text-transform: uppercase;
  }
  .text-truncate {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .text-capitalize {
    text-transform: capitalize;
  }
  .text-italic {
    font-style: italic;
  }
  .text-decoration-none {
    text-decoration: none;
  }
  .text-weight-500 {
    font-weight: 500;
  }
  .text-weight-600 {
    font-weight: 600;
  }
  /* End of Texts */

  /* Displays */
  .display-inline-block {
    display: inline-block;
  }
  .display-block {
    display: block;
  }
  .display-flex {
    display: flex;
  }
  .flex-start {
    justify-content: flex-start;
    align-self: flex-start;
  }
  .flex-center {
    justify-content: center;
    align-self: center;
  }
  .flex-end {
    justify-content: flex-end;
    align-self: flex-end;
  }
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  /* End of Displays */

  /* Colors */
  .fill-color-11 {
    fill: var(--color-11);
  }

  .color-white {
    color: var(--color-white);
  }

  .color-primary {
    color: var(--color-primary);
  }
  /* End of colors */

  .max-width-1150 {
    max-width: 115rem;
  }
  .max-width-830 {
    max-width: 80rem;
  }
  .max-width-720 {
    max-width: 72rem;
  }
  .max-width-700 {
    max-width: 70rem;
  }
  .max-width-690 {
    max-width: 69rem;
  }
  .max-width-590 {
    max-width: 59rem;
  }
  .max-width-580 {
    max-width: 58rem;
  }
  .max-width-550 {
    max-width: 55rem;
  }
  .max-width-510 {
    max-width: 51rem;
  }
  .max-width-480 {
    max-width: 48rem;
  }
  .max-width-455 {
    max-width: 45.5rem;
  }
  .max-width-200px {
    max-width: 20rem;
  }
  .max-width-220px {
    max-width: 22rem;
  }
  .width-full {
    width: 100%;
  }

  .cursor-pointer {
    cursor: point er;
  }

  .responsive-image {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }

  .border-bottom-1 {
    border-bottom: 1px solid rgba(0, 0, 0, 0.12);
  }

  .py-20 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }

  .link-btn {
    text-decoration: none;
    display: inline-block;
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 1.4rem 3rem;
    border-radius: 0.7rem;
  }

  .hide-on-mobile {
    ${responsive("sm", `display:none`)}
  }
  .responsive-flex-row {
    ${responsive(
      "sm",
      `flex-direction:column; justify-contents: flex-start; align-items: flex-start;`
    )}
  }

  .rotate-180 {
    transform: rotate(180deg);
  }
`;
