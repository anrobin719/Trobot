import React, { Component } from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Input from '../ui/Input';
import { updateObject, checkValidity } from '../../lib/shared/utility';
import Button from '../ui/Button';
import Loading from '../ui/Loading';

class Editor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      controls: {
        title: {
          label: '제목',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: '제목을 입력하세요.',
          },
          value: '',
          validation: {
            required: true,
            maxLength: 20,
          },
          vaild: false,
          touched: false,
        },
        sub: {
          label: '요약',
          elementType: 'input',
          elementConfig: {
            type: 'text',
            placeholder: '간단한 설명을 입력하세요.',
          },
          value: '',
          validation: {
            required: true,
            maxLength: 40,
          },
          vaild: false,
          touched: false,
        },
        tag: {
          label: '태그',
          elementType: 'input',
          elementConfig: {
            type: 'radio',
          },
          dafaultValue: [
            '라이프',
            '테크',
            '경제',
            '환경',
            '생산성',
            '건강',
            '문화',
            '그 외 분류',
          ],
          value: '',
          validation: {
            required: true,
          },
          valid: false,
        },
        body: {
          label: '본문',
          elementType: 'textarea',
          elementConfig: {
            placeholder: '본문을 입력하세요.',
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
        },
      },
    };
  }

  onSubmit = e => {
    const { submitHandler } = this.props;
    const { controls } = this.state;
    e.preventDefault();

    const nickname = localStorage.getItem('nickname');
    const userId = localStorage.getItem('userId');
    const newPostpublishedDate = new Date();
    const newPostData = {
      title: controls.title.value,
      sub: controls.sub.value,
      tag: controls.tag.value,
      body: controls.body.value,
      publishedDate: newPostpublishedDate,
      authorNickname: nickname,
      authorId: userId,
      like: 0,
      comment: null,
    };
    submitHandler(newPostData);
  };

  inputChangedHandler = (event, controlName) => {
    const { controls } = this.state;
    const updateControls = updateObject(controls, {
      [controlName]: updateObject(controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          controls[controlName].validation,
        ),
        touched: true,
      }),
    });
    this.setState({ controls: updateControls });
  };

  render() {
    const { postId, loading } = this.props;
    const { controls } = this.state;

    const formElementsArray = [];
    for (const key in controls) {
      formElementsArray.push({
        id: key,
        config: controls[key],
      });
    }

    const form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        label={formElement.config.label}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        configType={formElement.config.elementConfig.type}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        dafaultValue={formElement.config.dafaultValue}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    return (
      <Wrapper>
        {loading ? <Loading /> : null}
        <form onSubmit={this.onSubmit}>
          <EditorBox>{form}</EditorBox>
          <Button theme="basic" size="big" type="submit">
            {postId ? '수정' : '작성'}하기
          </Button>
        </form>
      </Wrapper>
    );
  }
}

const Wrapper = styled(Responsive)`
  padding-bottom: 10rem;
  form {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

const EditorBox = styled.div`
  width: 100%;
  padding: 2rem 3rem 8rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  background: white;
  border-radius: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 2px rgba(0, 0, 0, 0.1);
  label {
    font-size: 1.3rem;
    margin-top: 2rem;
    margin-left: 0.3rem;
    margin-bottom: 0.6rem;
  }
`;

export default Editor;
