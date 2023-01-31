import {
  IonPage,
  IonHeader,
  IonItem,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonToggle,
  IonLabel,
  IonButton,
  IonInput,
  IonChip,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonButtons,
  IonMenuButton,
  IonMenu,
  useIonLoading,
  IonIcon,
  IonBackButton,
  IonAvatar,
  IonText,
  IonSegmentButton,
  IonSegment,
  IonSearchbar,
  useIonToast,
  IonFab,
  IonFabButton,
} from '@ionic/react';
import {
  add,
  create,
  ellipsisHorizontal,
  ellipsisVertical,
  helpCircle,
  personCircle,
  search,
  star,
  warning,
} from 'ionicons/icons';
import { useRef, useState } from 'react';

const Helloworld = () => {
  const modal = useRef(null);
  const input = useRef(null);

  const [present, dismiss] = useIonLoading();
  const [message, setMessage] = useState(
    'This modal example uses triggers to automatically open a modal when the button is clicked.',
  );

  function confirm() {
    modal.current?.dismiss(input.current?.value, 'confirm');
  }

  function onWillDismiss(ev) {
    if (ev.detail.role === 'confirm') {
      setMessage(`Hello, ${ev.detail.data}!`);
    }
  }

  const [present_toast] = useIonToast();

  const presentToast = position => {
    present_toast({
      message: 'Hello World!',
      duration: 1500,
      position: position,
    });
  };

  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">This is the menu content.</IonContent>
      </IonMenu>

      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonFab>
            <IonFabButton>
              <IonIcon icon={add}></IonIcon>
            </IonFabButton>
          </IonFab>

          <IonButton expand="block" onClick={() => presentToast('top')}>
            Present Toast At the Top
          </IonButton>
          <IonButton expand="block" onClick={() => presentToast('middle')}>
            Present Toast At the Middle
          </IonButton>
          <IonButton expand="block" onClick={() => presentToast('bottom')}>
            Present Toast At the Bottom
          </IonButton>

          <IonSearchbar></IonSearchbar>
          <IonSearchbar placeholder="Custom Placeholder"></IonSearchbar>
          <IonSearchbar disabled={true} placeholder="Disabled"></IonSearchbar>
          <IonSearchbar value="Value"></IonSearchbar>
          <IonSearchbar animated={true} placeholder="Animated"></IonSearchbar>

          <IonSegment value="default">
            <IonSegmentButton value="default">
              <IonLabel>Default</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="segment">
              <IonLabel>Segment</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <IonSegment disabled={true} value="disabled">
            <IonSegmentButton value="disabled">
              <IonLabel>Disabled</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="segment">
              <IonLabel>Segment</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          <IonText color="primary">
            <h1>H1: The quick brown fox jumps over the lazy dog</h1>
          </IonText>

          <IonText color="secondary">
            <h2>H2: The quick brown fox jumps over the lazy dog</h2>
          </IonText>

          <IonText color="tertiary">
            <h3>H3: The quick brown fox jumps over the lazy dog</h3>
          </IonText>

          <p>
            <IonText color="warning">
              <IonIcon icon={warning}></IonIcon>
            </IonText>
            I saw a werewolf with a Chinese menu in his hand. Walking through the{' '}
            <IonText color="success">
              <sub>streets</sub>
            </IonText>{' '}
            of Soho in the rain. He{' '}
            <IonText color="medium">
              <i>was</i>
            </IonText>{' '}
            looking for a place called Lee Ho Fook s. Gonna get a{' '}
            <IonText color="danger">big dish of beef chow mein.</IonText>
          </p>

          <IonList>
            <IonItem>
              <IonLabel>Default Toggle</IonLabel>
              <IonToggle slot="end"></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Checked Toggle</IonLabel>
              <IonToggle slot="end" checked={true}></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Disabled Toggle</IonLabel>
              <IonToggle slot="end" disabled={true}></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Disabled Checked Toggle</IonLabel>
              <IonToggle slot="end" checked={true} disabled={true}></IonToggle>
            </IonItem>
            <IonItem>
              <IonLabel>Disabled Checked Toggle</IonLabel>
              <IonToggle enableOnOffLabels={true}></IonToggle>
            </IonItem>
          </IonList>

          <IonAvatar>
            <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
          </IonAvatar>
          <ion-chip>
            <ion-avatar>
              <img alt="Silhouette of a person's head" src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            </ion-avatar>
            <ion-label>Chip Avatar</ion-label>
          </ion-chip>
          <IonButton id="open-modal" expand="block">
            Open
          </IonButton>
          <p>{message}</p>
          <IonModal ref={modal} trigger="open-modal" onWillDismiss={ev => onWillDismiss(ev)}>
            <IonHeader>
              <IonToolbar>
                <IonButtons slot="start">
                  <IonButton onClick={() => modal.current?.dismiss()}>Cancel</IonButton>
                </IonButtons>
                <IonTitle>Welcome</IonTitle>
                <IonButtons slot="end">
                  <IonButton strong={true} onClick={() => confirm()}>
                    Confirm
                  </IonButton>
                </IonButtons>
              </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
              <IonItem>
                <IonLabel position="stacked">Enter your name</IonLabel>
                <IonInput ref={input} type="text" placeholder="Your name" />
              </IonItem>
            </IonContent>
          </IonModal>

          <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton size="large">Favorite</IonButton>
            </IonButtons>
            <IonTitle>Default Buttons</IonTitle>
            <IonButtons slot="primary">
              <IonButton>Delete</IonButton>
            </IonButtons>
          </IonToolbar>

          <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton>
                <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
              </IonButton>
              <IonButton>
                <IonIcon slot="icon-only" icon={search}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonButtons slot="primary">
              <IonButton>
                <IonIcon slot="icon-only" ios={ellipsisHorizontal} md={ellipsisVertical}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Icon Buttons</IonTitle>
          </IonToolbar>

          <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton fill="solid">
                <IonIcon slot="start" icon={personCircle}></IonIcon>
                Contact
              </IonButton>
            </IonButtons>
            <IonButtons slot="primary">
              <IonButton fill="solid">
                Help
                <IonIcon slot="end" icon={helpCircle}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Solid Buttons</IonTitle>
          </IonToolbar>

          <IonToolbar>
            <IonButtons slot="secondary">
              <IonButton fill="outline">
                <IonIcon slot="start" icon={star}></IonIcon>
                Star
              </IonButton>
            </IonButtons>
            <IonButtons slot="primary">
              <IonButton fill="outline">
                Edit
                <IonIcon slot="end" icon={create}></IonIcon>
              </IonButton>
            </IonButtons>
            <IonTitle>Outline Buttons</IonTitle>
          </IonToolbar>

          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="#"></IonBackButton>
            </IonButtons>
            <IonTitle>Back Button</IonTitle>
          </IonToolbar>

          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton autoHide={false}></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu Button</IonTitle>
          </IonToolbar>

          <IonButton
            onClick={() => {
              present({
                message: 'Dismissing after 3 seconds...',
                duration: 3000,
              });
            }}
          >
            Show Loading
          </IonButton>

          <IonButton>helloworld</IonButton>
          <IonButton fill="outline">helloworld</IonButton>
          <IonChip>Default</IonChip>
          <IonChip disabled={true}>Disabled</IonChip>
          <IonChip outline={true}>Outline</IonChip>
          <IonDatetimeButton datetime="datetime"></IonDatetimeButton>

          <IonModal keepContentsMounted={true}>
            <IonDatetime id="datetime"></IonDatetime>
          </IonModal>
        </IonContent>
      </IonPage>
    </>
  );
};
export default Helloworld;
