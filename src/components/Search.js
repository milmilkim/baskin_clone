import styled from 'styled-components';
import { options, tags, allergy } from '../config';
import checkOff from '../assets/img/bg_check_off.gif';
import checkOn from '../assets/img/bg_check_on.gif';

const SearchContainer = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  z-index: 1001;
  position: absolute;

  & + .modal__bg {
    top: 187px;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: ${(props) => props.height};
    z-index: 10;
    position: absolute;
    animation: fadeIn 500ms ease;
    animation-fill-mode: forwards;
  }

  .modal {
    position: absolute;
    top: 186px;
    height: 260px;
    background-color: #fff;
    width: 100%;
    z-index: 999999;
    opacity: 0;
    animation: fadeInDown 500ms ease;
    animation-fill-mode: forwards;

    .modal__inner {
      max-width: 1200px;
      margin: auto;
      padding: 20px 0 20px;
      display: flex;
      flex-wrap: wrap;

      input[type='text'],
      select {
        height: 32px;
        padding: 8px 1px 8px 10px;
        font-size: 13px;
        line-height: 16px;
        height: 32px;
      }

      input[type='text'] {
        background: #efefef;
        border: 0;
      }

      select {
        background: #fff;
        border: 1px solid #d1cecc;
        border-radius: 4px;
        width: 128px;
        color: #636363;
        margin-right: 14px;
      }

      & > div {
        display: flex;
      }

      .title,
      .hash {
        label {
          font-size: 14px;
          width: 100px;
          padding-top: 8px;
        }
      }

      .title {
        width: 45%;
        input {
          width: 260px;
        }
      }

      .hash {
        width: 55%;
        display: flex;
        input {
          width: 100%;
          color: #ff7c98;
        }

        dt,
        dd {
          font-size: 13px;
          margin: 10px;
          span {
            padding: 0 10px 10px 0;
            display: inline-block;
            color: #ff7c98;
            cursor: pointer;
          }
        }

        dt::before {
          content: '·';
          padding: 0 3px;
        }

        dt {
          opacity: 0.7;
        }
      }

      .allergy {
        label {
          width: 100px;
          font-size: 14px;
        }
        .wrapper {
          width: 300px;
          font-size: 13px;
          word-break: keep-all;

          label {
            display: inline-block;
            font-size: 13px;
            width: 70px;
            line-height: 17px;
            padding-bottom: 10px;
          }

          input[type='checkbox'] {
            display: none;
          }

          input[type='checkbox'] + span {
            width: 50px;
            display: inline-block;
            background-image: url(${checkOff});
            background-repeat: no-repeat;
            padding-left: 22px;
            cursor: pointer;
          }

          input[type='checkbox']:checked + span {
            background-image: url(${checkOn});
          }
        }
      }

      .button {
        display: block;
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 20px;
        left: 0;

        button {
          width: 147px;
          height: 37px;
          background: #ff7c98;
          color: #fff;
          font-size: 15px;
          line-height: 37px;
          border-radius: 18px;
          border: 0;
          cursor: pointer;
        }
      }
    }
  }
`;
const Search = () => {
  return (
    <>
      <SearchContainer height={`${document.body.scrollHeight - 187}px`}>
        {/* <SearchContainer height={'100vh'}> */}
        <div className="modal">
          <div className="modal__inner">
            <div className="title">
              <label htmlFor="title">제품명</label>
              <select>
                <option value="">전체</option>
                {options.map((v, i) => (
                  <option key={i} value={v}>
                    {v}
                  </option>
                ))}
              </select>
              <input name="title" type="text"></input>
            </div>

            <div className="hash">
              <label htmlFor="hash">해시태그</label>
              <div>
                <input name="hash" type="text"></input>
                <dt>자주 찾는 해시태그</dt>
                <dd>
                  {tags.map((v, i) => (
                    <span key={i}>#{v}</span>
                  ))}
                </dd>
              </div>
            </div>

            <div className="allergy">
              <label htmlFor="allergy">알레르기 성분</label>

              <div className="wrapper">
                <ul>
                  {allergy.map((v, i) => (
                    <label key={i}>
                      <input type="checkbox" value={v} />
                      <span>{v}</span>
                    </label>
                  ))}
                </ul>
              </div>
            </div>

            <div className="button">
              <button>검색</button>
            </div>
          </div>
        </div>
      </SearchContainer>
      <div className="modal__bg"></div>
    </>
  );
};

export default Search;
