
exports.seed = function(knex, Promise) {
    return knex('News').del()
        .then(function() {
            return knex('News').insert([
                { id: 1, organisation: 'SPCA', headline: 'Grumpy Cat would like to be known as Crabby Cat ', content: 'After many years in the spotlight, Crabby Cat would really love to lead a quiet life and has changed his name by statutory declaration to now be Crabby Cat.', image: '/images/news/grumpycat.jpg' },
                { id: 2, organisation: 'Animal Welfare', headline: 'Working together to save wildlife – the No Domestic Trade campaign ', content: 'A secondary school teacher in New Zealand, Virginia Woolf has worked tirelessly over the past five years, campaigning to protect animals in the wild who are at serious risk of becoming extinct because they are being poached for their skin, tusks and horn. How to show your support The answer is simple: ban all trade, and we may be able to save what is left of these incredible creatures. Virginia runs a community platform and organisation entitled NZFEW (New Zealanders for Endangered Wildlife) which aims to highlight these significant wildlife issues, and continues to encourage as many people as possible to sign the online or paper copy of the letter to Minister of Conservation Eugenie Sage so that there are enough signatures to persuade her to take the issue to Cabinet for discussion over changing the legislation.“Much-needed change is long overdue in NZ legislation to ban all trade in ivory and rhino horn here in the South Pacific, thereby allowing us to play our part in contributing to the preservation of these species,” says Virginia. New Zealanders are encouraged to sign the petition and show their support by visiting http://march4elephantsandrhinos.org/', image: '/images/news/bantrade.jpg' },
                { id: 3, organisation: 'Native Bird Rescue', headline: 'Nurturing our Natives', content: 'The centre\'s future. With hundreds of successful rescues under her belt, Karen’s not done yet. The next plan is to expand the Native Bird Rescue – Waiheke Island headquarters. Currently the centre operates out of her house, but thanks to some much-appreciated funding, they are halfway to their goal of a new dedicated centre. The long-term vision is to move to a purpose-built space which will have a special viewing area, where visitors can watch the birds being cared for and learn more about the importance of caring for our environment and our diverse native species.', image: '/images/news/kakapo.jpg' },
                { id: 4, organisation: 'BBC', headline: 'Swiss voters reject fair food plans', content: 'Voters in Switzerland have overwhelmingly rejected two proposals on ethical and sustainable food. Final results of the two nationwide polls show that more than 60% of people voted against them. The proposals were aimed at boosting local farming and promoting more sustainable agriculture. But opponents, including business leaders and the government - which advised people to vote no - had warned of higher food prices and less choice. The size of the defeat will be a big disappointment to farmers\' groups and ethical food campaigners, says the BBC\'s Imogen Foulkes in Geneva.', image: '/images/news/faircow.jpg' },
                { id: 5, organisation: 'SeaWorld', headline: 'SeaWorld and ex-boss to pay $5m to settle fraud claim', content: 'The firm and James Atchison downplayed the effect on the firm\'s reputation and business, the US regulator said. The 2013 US film was about a performing killer whale at the marine park called Tilikum, and depicted keeping orcas in captivity as cruel and dangerous.The negative publicity led to a drop in visitor numbers at SeaWorld.', image: '/images/news/seaworld.jpg' }
            ]);
        });
};
