import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Back,
  Title,
  Subheading,
  Input,
  Button,
} from 'components';
import CreateSuccess from 'pages/create-success';
import coffeeSVG from 'assets/graphics/coffee.svg';
import classes from './style.module.scss';

function Create() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isTitleValid, setIsTitleValid] = useState(false);
  const [date, setDate] = useState('');
  const [isDateValid, setIsDateValid] = useState(false);
  const [time, setTime] = useState('');
  const [isTimeValid, setIsTimeValid] = useState(false);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();

  return success ? <CreateSuccess /> : (
    <>
      <div className="content">
        <Back onClick={() => navigate('/')} />
        <img
          className={classes.coffee}
          alt="coffee"
          src={coffeeSVG}
        />
        <Title className={classes.title}>Bikin Wacana</Title>
        <Subheading className={classes.subheading} tertiary>
          Tentuin temanya apa, tanggal berapa, trus bagikan deh, ke orang yang mau diajak.
        </Subheading>
        <Input
          className={classes['input-title']}
          type="text"
          name="title"
          placeholder="Tema wacananya apa?"
          info="Tambahin detail (optional)"
          infoInput="description"
          infoIcon="file-lines"
          value={title}
          subValue={description}
          isValid={isTitleValid}
          setValue={setTitle}
          setSubValue={setDescription}
          setIsValid={setIsTitleValid}
        />
        <div className={classes['input-date-time']}>
          <Input
            secondary
            type="date"
            name="date"
            placeholder="Kapan nih?"
            value={date}
            isValid={isDateValid}
            setValue={setDate}
            setIsValid={setIsDateValid}
          />
          <Input
            secondary
            type="time"
            name="time"
            placeholder="Jam berapa?"
            value={time}
            isValid={isTimeValid}
            setValue={setTime}
            setIsValid={setIsTimeValid}
          />
        </div>
      </div>
      <div className="footer">
        <Button
          primary
          disabled={!isTitleValid || !isDateValid || !isTimeValid}
          onClick={() => setSuccess(true)}
        >
          Bikin Wacana
        </Button>
      </div>
    </>
  );
}

export default Create;
