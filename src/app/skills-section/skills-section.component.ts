import { Component } from '@angular/core';

interface ISkill {
  img: string;
  name: string;
  percentage: number;
}

@Component({
  selector: 'skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.css'],
})
export class SkillsSectionComponent {
  skills: ISkill[] = [
    {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.clipartkey.com%2Fmpngs%2Fm%2F210-2104705_html-logo-png-transparent-background.png&f=1&nofb=1&ipt=6d2462d2eff469f3ad38799dcab421988052a5d4e87f2936e457cd6df8d766b9&ipo=images',
      name: 'HTML',
      percentage: 100,
    },
    {
      img: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.asdduiliabarcellonapg.it%2Fwp-content%2Fuploads%2F2016%2F03%2Fcss-logo.png&f=1&nofb=1&ipt=2a146652e4b388c57e742e6f19190646dfd7f7eabe37ef2411e7878a2cecd168&ipo=images',
      name: 'CSS',
      percentage: 100,
    },
    {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F17%2F41%2Fjavascript-736400_960_720.png&f=1&nofb=1&ipt=f543109fe10b1ea60a89e594c380b46a23d56420913c873469a12d86fcd48a23&ipo=images',
      name: 'JavaScript',
      percentage: 90,
    },
    {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.kindpng.com%2Fpicc%2Fm%2F19-195049_react-js-logo-svg-hd-png-download.png&f=1&nofb=1&ipt=0e411e59c2de0ca8c392f5d427197aef7660273608e59371061226f7ed17f1db&ipo=images',
      name: 'React',
      percentage: 90,
    },
    {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.qJLL9KebrDW_MGmnycRxJQHaHa%26pid%3DApi&f=1&ipt=303f81533c9a86f4f6ab776cf165a576bebd31b5f26bd621e6cbd9a8b74805f9&ipo=images',
      name: 'Next.js',
      percentage: 80,
    },
    {
      img: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F1200%2F1*mn6bOs7s6Qbao15PMNRyOA.png&f=1&nofb=1&ipt=a8f9bf8706e895fa7caff8f076c92d83df743e6618688f65812484f86e211b87&ipo=images',
      name: 'TypeScript',
      percentage: 90,
    },
  ];
}
