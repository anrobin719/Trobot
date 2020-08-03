import React, { Component } from 'react';

import styled from 'styled-components';
import Responsive from '../common/Responsive';
import Input from '../ui/Input';
import { updateObject, checkValidity } from '../../lib/shared/utility';
import Button from '../ui/Button';
import Loading from '../ui/Loading';
import shadow from '../../lib/styles/shadow';
import device from '../../lib/styles/device';

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
            '기타분류',
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

  componentDidMount() {
    const { pnum, post } = this.props;
    const { title, sub, tag, body } = post.toJS();
    if (pnum) {
      const { controls } = this.state;
      const updateControls = updateObject(controls, {
        title: updateObject(controls.title, {
          value: title,
        }),
        sub: updateObject(controls.sub, {
          value: sub,
        }),
        tag: updateObject(controls.tag, {
          value: tag,
        }),
        body: updateObject(controls.body, {
          value: body,
        }),
      });
      this.setState({ controls: updateControls });
    }
  }

  onSubmit = async e => {
    const { post, pnum, editPostHandler, submitPostHandler } = this.props;
    const { controls } = this.state;
    const nickname = localStorage.getItem('nickname');
    const img = localStorage.getItem('img');
    const originPost = post.toJS();
    e.preventDefault();
  
    const editorData = {
      title: controls.title.value,
      sub: controls.sub.value,
      tag: controls.tag.value,
      body: controls.body.value,
      authorNickname: nickname,
      authorImg: img,
    };
    const postData = {
      ...originPost,
      ...editorData,
    };
  
    const userId = localStorage.getItem('userId');
    const email = localStorage.getItem('email');
    const newPostpublishedDate = new Date();
    const newPostData = {
      ...editorData,
      publishedDate: newPostpublishedDate,
      authorId: userId,
      authorEmail: email,
      like: 0,
      comment: null,
    };
    try {
      if (pnum) {
        await editPostHandler(pnum, postData);
        return;
      }
      await submitPostHandler(newPostData);
    } catch (err) {
      console.log(err);
    }
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
    const { pnum, loading, postTag } = this.props;
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
        postTag={postTag}
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
            {pnum ? '수정' : '작성'}하기
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
  box-shadow: ${shadow.basic[1]};
  label {
    font-size: 1.3rem;
    margin-top: 2rem;
    margin-left: 0.3rem;
    margin-bottom: 0.6rem;
  }

  @media ${device.tablet} {
    padding: 1rem 2rem 6rem;
  }
  @media ${device.mobileL} {
    margin-top: 2rem;
    padding: 0rem 1rem 4rem;
    border-radius: 1rem;
  }
`;

export default Editor;
